import React, { useRef } from "react";
import Cards from "./Cards";


function Foreground() {

    const ref = useRef();

  const data = [
    {
      desc: "The way to get started is to quit talking and begin doing.",
      filesize: ".9mb",
      close: true,
      tag: { isOpen: false, tagTitle: "Download Now", tagColor: "green" },
    },
    {
        desc: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
        filesize: ".9mb",
        close: false,
        tag: { isOpen: false, tagTitle: "Download Now", tagColor: "green" },
      },
      {
        desc: "The future belongs to those who believe in the beauty of their dreams.",
        filesize: ".9mb",
        close: true,
        tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
      },
      {
        desc: "You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one. ",
        filesize: ".9mb",
        close: true,
        tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
      },
      {
        desc: "The only thing we have to fear is fear itself.",
        filesize: ".9mb",
        close: true,
        tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
      },
      {
        desc: "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
        filesize: ".9mb",
        close: true,
        tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
      },
      {
        desc: "It is during our darkest moments that we must focus to see the light. -Aristotle",
        filesize: ".9mb",
        close: true,
        tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
      },
      {
        desc: "Be yourself; everyone else is already taken. -Oscar Wilde",
        filesize: ".9mb",
        close: true,
        tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green" },
      },
  ];

  return (
    <>
      <div ref={ref} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-5 flex-wrap p-5">
        {data.map((items,index)=>(
            <Cards data={items} reference={ref} />
        ))}
      </div>
    </>
  );
}

export default Foreground;
