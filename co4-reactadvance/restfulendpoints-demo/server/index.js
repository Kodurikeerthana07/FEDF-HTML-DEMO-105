console.log("File executed successfully");
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

let students = [
  { id: 1, name: "Venki" },
  { id: 2, name: "Jaswanth" },
  { id: 3, name: "Lalli" },
];
let nextId = Math.max(0, ...students.map(s => s.id)) + 1;

app.get("/api/students", (req, res) => {
  res.json(students);
});

app.get("/api/students/:id", (req, res) => {
  const id = Number(req.params.id);
  if (Number.isNaN(id)) {
    return res.status(400).json({ error: "Invalid id (must be a number)" });
  }
  const found = students.find(s => s.id === id);
  if (!found) {
    return res.status(404).json({ error: "Student not found" });
  }
  res.json(found);
});

app.post("/api/students", (req, res) => {
  const { name } = req.body;
  if (!name || !name.trim()) {
    return res.status(400).json({ error: "Name is required" });
  }
  const newStudent = { id: nextId++, name: name.trim() };
  students.push(newStudent);
  res.status(201).json(newStudent);
});

app.put("/api/students/:id", (req, res) => {
  const id = Number(req.params.id);
  if (Number.isNaN(id)) {
    return res.status(400).json({ error: "Invalid id (must be a number)" });
  }
  const { name } = req.body;
  if (!name || !name.trim()) {
    return res.status(400).json({ error: "Name is required" });
  }
  const idx = students.findIndex(s => s.id === id);
  if (idx === -1) {
    return res.status(404).json({ error: "Student not found" });
  }
  students[idx] = { ...students[idx], name: name.trim() };
  res.json(students[idx]);
});

app.delete("/api/students/:id", (req, res) => {
  const id = Number(req.params.id);
  if (Number.isNaN(id)) {
    return res.status(400).json({ error: "Invalid id (must be a number)" });
  }
  const idx = students.findIndex(s => s.id === id);
  if (idx === -1) {
    return res.status(404).json({ error: "Student not found" });
  }
  students.splice(idx, 1);
  res.status(204).end();
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
