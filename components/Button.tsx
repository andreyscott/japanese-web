
const Button = () => {
  return (
    <div>
      {/* /* create a cta button component with a prop of type string and display the prop in the button the button should have a  border and a icon to the rigth use the above in tailwind  */}

      <button className="flex flex-row relative text-center items-center justify-center  p-2 md:p-3 w-96 h-12 md:h-10 mb-2 bg-white hover:bg-primaryRed text-primaryRed hover:text-white border-2 border-primaryRed rounded-lg">
        <p className="font-bold text-xl">webから体験予約をする!!</p>
        {/* create a rigth angle icon with color primaryRed when hovered it turns white and add it to the right of the button  */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 ml-2 absolute right-2 md:right-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path

            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>

      

        

      </button>



        
    </div>
  )
}

export default Button