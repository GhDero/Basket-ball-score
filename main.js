function onLoad(_input, output) {
  output.homeScore   = 0;
  output.awayScore   = 0;
  output.activeTeam  = 0;
  output.indHome     = 1;
  output.indAway     = 0;
}

function onEvent(_input, output, eventId) {
  switch (eventId) {
    case 1:
      if (output.activeTeam == 0) { output.homeScore += 2; }
      else                        { output.awayScore += 2; }
      break;
    case 2:
      if (output.activeTeam == 0) { output.homeScore += 3; }
      else                        { output.awayScore += 3; }
      break;
    case 3:
      if (output.activeTeam == 0) { output.homeScore++; }
      else                        { output.awayScore++; }
      break;
    case 4:
      if (output.activeTeam == 0) {
        if (output.homeScore > 0) { output.homeScore--; }
      } else {
        if (output.awayScore > 0) { output.awayScore--; }
      }
      break;
    case 5:
      if (output.activeTeam == 0) {
        output.activeTeam = 1;
        output.indHome = 0;
        output.indAway = 1;
      } else {
        output.activeTeam = 0;
        output.indHome = 1;
        output.indAway = 0;
      }
      break;
    case 6:
      output.homeScore = 0;
      output.awayScore = 0;
      break;
  }
}

function evaluate(_input, output) {
  setText('#lbl-active', output.activeTeam == 0 ? 'HOME' : 'AWAY');
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