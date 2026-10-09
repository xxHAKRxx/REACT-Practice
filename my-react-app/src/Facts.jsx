function RandomObscureFact() {
  const facts = [
    "The original Apple I computer only came in a motherboard with components to connect peripheral devices. Users had to build their own cases and use their own keyboard and monitor.",
    "There is a long running myth that Microsoft saved Apple from bankruptcy in the 1990s by making a massive investment in the company. This is not true, since the investment was pretty small and wouldn't have been enough to save the company anyway. Had they actually invested to save Apple, it would have made them look suspicious for their antitrust lawsuit going on at the time, since it's a common tactic for monopolies to invest in competitors to give the illusion of competition.",
    "North Korea made their own Linux distro once, called Red Star OS. Early versions of it were a blatant knockoff of Windows XP, while later versions switched to a UI that resembled Mac OS X. Though, no one really used it since internet access is very strict in North Korea.",
    "Before Windows 95, closing the program manager window was how you would exit Windows.",
    "You can create a gaming PC in an extremely small case and it will run modern games just fine. These cases are known as Sandwich cases.",
    "The world's smallest transistors are about the size of an atom. In a CPU, that would mean it can have trillions of transistors on one chip.",
    "Unlike most industries, which were largely dominated by male figures, computer history has had a much more extensive list of female and queer figures, due to computer programming's early involvement of women. Notable examples include Ada Lovelace, Grace Hopper, Alan Turing, and Lynn Conway."
  ] 
  
  const getRandomFact = () => {
    alert(facts[Math.floor(Math.random() * facts.length)]);
  }

  return (
    <button onClick={getRandomFact}>Click me for random fact (try to find all 7)</button>
  );
}

export default RandomObscureFact;