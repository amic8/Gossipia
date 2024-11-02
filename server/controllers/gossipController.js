const Gossip = require("../dataModels/gossipSchema");

const createGossip = async (req, res) => {
  try {
    const newGossip = new Gossip({
      id: req.body.id,
      content: req.body.content,
      author: req.body.author || "Anonymous",
      created_at: req.body.created_at || Date.now(),
      secret: req.body.secret,
    });
    await newGossip.save();
    res.status(201).json(newGossip);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Failed to create gossip");
  }
};

const getGossips = async (req, res) => {
  try {
    const gossips = await Gossip.find();
    res.status(200).json(gossips);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Failed to fetch gossips");
  }
};

const updateGossip = async (req, res) => {
  try {
    const { id } = req.params;
    const { content, secret } = req.body;

    const gossip = await Gossip.findOne({ id });
    if (!gossip) {
      return res.status(404).json({ msg: 'Gossip not found' });
    }

    // Verify the secret before updating
    if (gossip.secret !== secret) {
      return res.status(403).json({ msg: 'Incorrect secret' });
    }

    gossip.content = content;
    await gossip.save();

    res.status(200).json(gossip);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Failed to update gossip');
  }
};

const deleteGossip = async (req, res) => {
  try {
    const { id } = req.params;
    const { secret } = req.body;

    const gossip = await Gossip.findOne({ id });
    if (!gossip) {
      return res.status(404).json({ error: "Gossip not found" });
    }

    // Verify the secret before deleting
    if (gossip.secret !== secret) {
      return res.status(403).json({ error: "Incorrect secret" });
    }

    await Gossip.deleteOne({ id });
    res.status(200).json({ msg: "Gossip removed" });

  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Failed to delete gossip" });
  }
};

module.exports = { createGossip, getGossips, updateGossip, deleteGossip };