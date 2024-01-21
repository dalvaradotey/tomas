export const PlayButton = ({ onClick }: any) => (
  <button className="h-20 w-20" onClick={onClick}>
    <div className="flex relative">
      <span className="relative inline-flex rounded-full h-20 w-20 bg-secondary opacity-90 hover:opacity-100 transition duration-700 ease-in-out">
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mt-4 ml-4 text-primary">
          <path d="M6 4v16a1 1 0 0 0 1.524 .852l13 -8a1 1 0 0 0 0 -1.704l-13 -8a1 1 0 0 0 -1.524 .852z" fill="currentColor" strokeWidth="0"></path>
        </svg>
      </span>
    </div>
  </button>
)

export default PlayButton
