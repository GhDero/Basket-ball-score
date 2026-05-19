function onLoad(_input, output) {
  output.homeScore  = 0;
  output.awayScore  = 0;
  output.activeTeam = 0;
}

function onEvent(_input, output, eventId) {
  switch (eventId) {
    case 1: // UP court = +2
      if (output.activeTeam == 0) { output.homeScore += 2; }
      else                        { output.awayScore += 2; }
      break;
    case 2: // DOWN court = +3
      if (output.activeTeam == 0) { output.homeScore += 3; }
      else                        { output.awayScore += 3; }
      break;
    case 3: // UP long = +1
      if (output.activeTeam == 0) { output.homeScore++; }
      else                        { output.awayScore++; }
      break;
    case 4: // DOWN long = annuler
      if (output.activeTeam == 0) {
        if (output.homeScore > 0) { output.homeScore--; }
      } else {
        if (output.awayScore > 0) { output.awayScore--; }
      }
      break;
    case 5:
      output.activeTeam = output.activeTeam == 0 ? 1 : 0;
      break;
    case 6:
      output.homeScore = 0;
      output.awayScore = 0;
      break;
  }
}

function evaluate(_input, output) {
  // Label equipe active
  if (output.activeTeam == 0) {
    setText('#active-label', 'HOME');
  } else {
    setText('#active-label', 'AWAY');
  }

  // Score HOME : version blanche visible si actif, sinon grise
  if (output.activeTeam == 0) {
    setStyle('#sc-home-on',  'visibility', 'VISIBLE');
    setStyle('#sc-home-off', 'visibility', 'HIDDEN');
    setStyle('#sc-away-on',  'visibility', 'HIDDEN');
    setStyle('#sc-away-off', 'visibility', 'VISIBLE');
  } else {
    setStyle('#sc-home-on',  'visibility', 'HIDDEN');
    setStyle('#sc-home-off', 'visibility', 'VISIBLE');
    setStyle('#sc-away-on',  'visibility', 'VISIBLE');
    setStyle('#sc-away-off', 'visibility', 'HIDDEN');
  }
}

function getUserInterface() {
  return { template: 't' };
}

function getSummaryOutputs(_input, output) {
  return [
    { id: 'h', name: 'Home Score', format: 'Count_Fourdigits', value: output.homeScore },
    { id: 'a', name: 'Away Score', format: 'Count_Fourdigits', value: output.awayScore }
  ];
}