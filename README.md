# 🏀 Basketball Score — SuuntoPlus App

A SuuntoPlus sports app to track basketball scores directly from your Suunto watch during a game. No more losing track of the score — focus on the game.

---

## 📋 Description

**Basketball Score** lets you track Home and Away team scores in real time during a basketball game. Switch between teams with a tap on the screen, add points with the physical buttons, and review the final scores in the workout summary.

---

## ⌚ Compatibility

| Watch | Display | Touch | Status |
|-------|---------|-------|--------|
| Suunto Vertical 2 | q (466×466) | ✅ | Recommended |
| Suunto Race S | q (466×466) | ✅ | Recommended |
| Suunto Race | q (466×466) | ✅ | Recommended |
| Suunto Race 2 | q (466×466) | ✅ | Recommended |
| Suunto Ocean | q (466×466) | ✅ | Recommended |
| Suunto Vertical (1st gen) | o (280×280) | ⚠️ Buttons only | Compatible |
| Suunto 9 Peak Pro | n (240×240) | ⚠️ Buttons only | Compatible |

> **Important:** On Suunto watches, the touchscreen is **disabled by default** during workouts. To use tap-to-switch, enable touch input in your activity settings before starting the workout.

---

## 🎮 Controls

### Physical Buttons

| Button | Action |
|--------|--------|
| **UP** short press | +2 points (active team) |
| **DOWN** short press | +3 points (active team) |
| **UP** long press | +1 point — free throw (active team) |
| **DOWN** long press | Cancel last point |

### Touchscreen (UI2 watches only)

| Gesture | Action |
|---------|--------|
| **Tap** on score area | Switch active team (Home ↔ Away) |

---

## 📱 Display

```
        Basketball
         ───────
  HOME       |       AWAY
   42        |        38
   —                        ← orange indicator = active team
```

- The **active team** label is displayed in orange at the top
- An **orange dash** appears under the active team's score
- Both scores are always visible

---

## 📊 Workout Summary

After ending the workout, the following data is saved to your Suunto app:

| Field | Description |
|-------|-------------|
| **Home Score** | Final score of the home team |
| **Away Score** | Final score of the away team |

---

## 🗂 File Structure

```
basketball-score/
├── manifest.json   # App configuration and outputs
├── main.js         # Game logic and score management
└── t.html          # Watch UI template
```

---

## 🛠 Installation

1. Clone or download this repository
2. Open the folder in **VS Code** with the [SuuntoPlus Extension](https://marketplace.visualstudio.com/items?itemName=Suunto.suuntoplus)
3. Click **Build and Deploy** to install on your connected watch
4. Start a **Basketball** workout on your watch
5. Swipe to the SuuntoPlus screen and select **Basketball Score**

---

## 📝 Notes

- Developed and tested on **Suunto Vertical 2**
- The app follows Suunto's official SuuntoPlus development guidelines
- If you encounter any issues on other watch models, please open an issue

---

## 📄 License

MIT License — feel free to use, modify and share.