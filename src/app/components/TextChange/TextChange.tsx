"use client"

import React, {useState, useEffect} from 'react'

export const TextChange = () => {
  const fonts = ['font-mono', 'font-serif', 'font-sans'];
  const [text, setText] = useState<string>(fonts[0]);
  const [fontIndex, setFontIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFontIndex((prevIndex) => (prevIndex + 1) % fonts.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setText(fonts[fontIndex]);
  }, [fontIndex]);

  return (
    <div className={`text-2xl font-bold text-black ${text}`}>
        Marc
    </div>
  )
}
