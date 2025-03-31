function generatePassword(length) {
  if (length < 8) {
      console.error("La longitud debe contener al menos 8 caracteres.");
      return "";
  }

  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const symbols = "!@#$%^&*()-_=+[]{};:,.<>?";
  const numbers = "0123456789";

  const allCharacters = lowercase + uppercase + symbols + numbers;

  // Seleccionar al menos un carácter de cada conjunto
  let password = [
      lowercase[Math.floor(Math.random() * lowercase.length)],
      uppercase[Math.floor(Math.random() * uppercase.length)],
      symbols[Math.floor(Math.random() * symbols.length)],
      numbers[Math.floor(Math.random() * numbers.length)]
  ];

  // Completar la contraseña con caracteres aleatorios
  for (let i = 4; i < length; i++) {
      password.push(allCharacters[Math.floor(Math.random() * allCharacters.length)]);
  }

  // Mezclar la contraseña para que los primeros caracteres no sean siempre en el mismo orden
  password = password.sort(() => Math.random() - 0.5).join("");

  console.log(password);
  return password;
}

// Ejemplo de uso
generatePassword(10); // Generará una contraseña aleatoria de 10 caracteres
