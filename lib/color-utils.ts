// Пул цветов для карточек
export const cardColors = [
    {
      light: 'bg-[#d3e1ff]', // голубой
      dark: 'dark:bg-blue-900/70',
      hex: {
        light: '#d3e1ff',
        dark: '#213559'
      },
      tailwindClass: 'bg-[#d3e1ff] dark:bg-[#213559]'
    },
    {
      light: 'bg-[#ffd4d4]', // розовый
      dark: 'dark:bg-red-900/70',
      hex: {
        light: '#ffd4d4',
        dark: '#592121'
      },
      tailwindClass: 'bg-[#ffd4d4] dark:bg-[#592121]'
    },
    {
      light: 'bg-[#c7f8c1]', // зеленый
      dark: 'dark:bg-green-900/70',
      hex: {
        light: '#c7f8c1',
        dark: '#215937'
      },
      tailwindClass: 'bg-[#c7f8c1] dark:bg-[#215937]'
    },
    {
      light: 'bg-[#fff1d4]', // желтый
      dark: 'dark:bg-yellow-900/70',
      hex: {
        light: '#fff1d4',
        dark: '#594a21'
      },
      tailwindClass: 'bg-[#fff1d4] dark:bg-[#594a21]'
    },
    {
      light: 'bg-[#ffddf5]', // фиолетовый
      dark: 'dark:bg-pink-900/70',
      hex: {
        light: '#ffddf5',
        dark: '#592150'
      },
      tailwindClass: 'bg-[#ffddf5] dark:bg-[#592150]'
    },
    {
      light: 'bg-[#ddf9ff]', // голубой
      dark: 'dark:bg-cyan-900/70',
      hex: {
        light: '#ddf9ff',
        dark: '#21525c'
      },
      tailwindClass: 'bg-[#ddf9ff] dark:bg-[#21525c]'
    },
    {
      light: 'bg-[#ecdcff]', // фиолетовый
      dark: 'dark:bg-purple-900/70',
      hex: {
        light: '#ecdcff',
        dark: '#2d2159'
      },
      tailwindClass: 'bg-[#ecdcff] dark:bg-[#2d2159]'
    }
  ];
  
  // Функция для получения цвета по индексу
  export function getColorByIndex(index: number) {
    return cardColors[index % cardColors.length];
  }
  
  // Функция для получения Tailwind класса по индексу
  export function getColorClassByIndex(index: number) {
    return cardColors[index % cardColors.length].tailwindClass;
  }