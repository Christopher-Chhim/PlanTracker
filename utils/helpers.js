module.exports = {
    // Format date as MM/DD/YYYY
    format_date: (date) => {
      // Ensure the date is valid
      if (!(date instanceof Date)) return '';
      return date.toLocaleDateString();
    },
  
    // Format large numbers with commas
    format_amount: (amount) => {
      // Ensure the amount is a number
      if (isNaN(amount)) return '0';
      return parseInt(amount).toLocaleString();
    },
  
    // Return a random emoji
    get_emoji: () => {
      const randomNum = Math.random();
  
      if (randomNum > 0.7) {
        return `<span for="img" aria-label="lightbulb">💡</span>`;
      } else if (randomNum > 0.4) {
        return `<span for="img" aria-label="laptop">💻</span>`;
      } else {
        return `<span for="img" aria-label="gear">⚙️</span>`;
      }
    },
  };