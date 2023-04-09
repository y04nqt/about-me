import { Frame } from "@react95/core";

export default function Eli(){
  const titles = [
    "Eli — My good boy, friend, and copilot.",
    "Eli — Sometimes he likes to bark loud and sometimes soft, but will always give a good attempt.",
    "Eli — He's dangerous but only if he feels the need to protect. Tough boy."
  ]
  const sub = [
    "He likes long walks and good cookies to devour.",
    "Sometimes he likes to sleep on his back with legs in the air or curled up.",
    "He has a lot of features, but the most important one is asking for some good scratches. He needs the good stratches."
  ]
  return(
    <Frame
      padding="8"
      boxShadow="out"
      bg="aliceblue"
    >
      <h1 className="text-center">{titles[Math.floor(Math.random() * 3)]}</h1>
      <Frame
        h={250}
        boxShadow="in"
      >
        <section
          className={`eli-${Math.floor(Math.random() * 3)} w-full h-[250px] bg-cover bg-center bg-no-repeat`}
        ></section>
      </Frame>
      <h1>{sub[Math.floor(Math.random() * 3)]}</h1>
    </Frame>
  )
}