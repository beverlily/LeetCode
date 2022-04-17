const findJudge = (peopleCount, trustGroups) => {
  if (trustGroups.length === 1) return trustGroups[0][1];

  const trustCounts = new Map();

  for (let i = 1; i <= peopleCount; i++) {
    trustCounts.set(i, 0);
  }

  for (const [person, trustedPerson] of trustGroups) {
    if (trustCounts.has(person)) trustCounts.delete(person);
    if (trustCounts.has(trustedPerson)) trustCounts.set(trustedPerson, trustCounts.get(trustedPerson) + 1);
  }

  possibleJudge = trustCounts.entries().next().value;

  return possibleJudge && possibleJudge[1] === peopleCount - 1
    ? possibleJudge[0]
    : -1;
};
