import { Frame } from '@react95/core';

const GenericModalContent = ({
  title = 'Generic Popup Content',
  textContent = 'Generic Text Content',
  imgArr = ['https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'],
  altArr = ['I am not a cat!'],
  bg = 'gray',
}) => {
  if (imgArr.length !== altArr.length) {
    throw new Error('imgArr and altArr must be the same length!');
  }

  const randIndex = Math.floor(Math.random() * imgArr.length);
  return (
    <Frame
      bg={bg}
      padding={8}
    >
      <h1
        className="text-center text-2xl font-bold my-2"
      >
        {title}
      </h1>
      <img
        className="rounded-lg h-[250px] mx-auto border-2 border-t-gray-800 border-l-gray-800 border-b-white"
        src={imgArr[randIndex]}
        alt={altArr[randIndex]}
      />
      <p
        className="text-center text-xl my-2"
      >{textContent}</p>
    </Frame>
  )
}

export default GenericModalContent;