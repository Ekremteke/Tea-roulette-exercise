// routes/preferencesRoutes.mjs
import express from "express";
import fs from "fs";
import path from "path";

const preferencesRoutes = express.Router();
const dataFilePath = path.join(process.cwd(), "public", "data.json");

// Helper functions
function readPreferences() {
  try {
    const data = fs.readFileSync(dataFilePath, "utf-8");
    return JSON.parse(data);
  } catch (err) {
    console.error("Error reading data file:", err);
    return [];
  }
}

function writePreferences(preferences) {
  try {
    fs.writeFileSync(dataFilePath, JSON.stringify(preferences, null, 2));
  } catch (err) {
    console.error("Error writing data file:", err);
  }
}

// GET all preferences
preferencesRoutes.get("/", (req, res) => {
  const preferences = readPreferences();
  res.json(preferences);
});

// POST new preference
preferencesRoutes.post("/", (req, res) => {
  const { name, sugar, milk } = req.body;
  if (!name || typeof sugar !== "number" || typeof milk !== "boolean") {
    return res.status(400).json({ error: "Invalid input data" });
  }

  const preferences = readPreferences();
  const newPreference = { id: Date.now().toString(), name, sugar, milk };
  preferences.push(newPreference);
  writePreferences(preferences);
  res.json(preferences);
});

// DELETE preference by index
preferencesRoutes.delete("/:index", (req, res) => {
  const index = parseInt(req.params.index);
  const preferences = readPreferences();
  if (index >= 0 && index < preferences.length) {
    preferences.splice(index, 1);
    writePreferences(preferences);
    res.json(preferences);
  } else {
    res.status(404).json({ error: "Preference not found" });
  }
});

// DELETE all preferences - Fixed route path
preferencesRoutes.delete("/", (req, res) => {
  // Removed 'api/preferences' from path
  writePreferences([]);
  res.json([]);
});

export default preferencesRoutes;
