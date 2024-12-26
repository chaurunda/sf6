export const notations = [
  { notation: ">", description: "Cancel the previous move to the following move." },
  { notation: "~", description: "Chain/Cancel the previous move into a followup." },
  {
    notation: ",",
    description:
      "Link the previous move to the following move. e.g. 5MP, 2MP (requires manual timing)",
  },
  { notation: "j.X", description: "Jumping action; for Neutral Jump, use 8j.X" },
  {
    notation: "P or K",
    description:
      "Any Punch or Any Kick (when button strength does not matter) PP or KK represents any two punches/kicks.",
  },
  { notation: "X/Y", description: "Do either X move or Y move." },
  { notation: "[X]", description: "Hold the button input" },
  { notation: "dl.X", description: "Briefly delay the action" },
  {
    notation: `Y xN/{Y} xN`,
    description:
      "Repeat 'Y' input 'N' number of times. A sequence of multiple inputs will be bundled into \"{}\".",
  },
  { notation: "Y > DR", description: "Button Y cancelled into Drive Rush (3-bar version)" },
  {
    notation: "DR~Y",
    description:
      "Drive Rush into Button Y (cancel the dash frames early into a followup attack). This can be done from the 1-bar or 3-bar versions of Drive Rush",
  },
]
