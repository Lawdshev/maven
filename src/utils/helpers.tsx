export function getRandomName() {
  const firstNames = [
    "John",
    "Jane",
    "Alex",
    "Emily",
    "Chris",
    "Pat",
    "Taylor",
    "Jordan",
    "Morgan",
      "Sam",
      "Grace",
      "Mark",
      "Emily",
    "Jacob",
    "Olivia",
  ];
  const lastNames = [
    "Smith",
    "Johnson",
    "Brown",
    "Williams",
    "Jones",
    "Davis",
    "Clark",
    "Miller",
    "Wilson",
      "Anderson",
      "Taylor",
      "Thomas",
      "Moore",
      "Jackson",
      "Lee",
  ];

  const randomFirstName =
    firstNames[Math.floor(Math.random() * firstNames.length)];
  const randomLastName =
    lastNames[Math.floor(Math.random() * lastNames.length)];

  return `${randomFirstName} ${randomLastName}`;
}

export function formatCurrency(amount: number) { 
  return new Intl.NumberFormat("en-US", {
  }).format(amount);
}