const getFormattedDate = date => {
  return new Date(Date.parse(date)).toLocaleDateString("en-US", {
    dateStyle: "long"
  });
};
