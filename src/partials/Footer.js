import React from 'react'
// import GitHubButton from 'react-github-btn'

function Footer({github}) {
  return (
    <div className="text-center w-full mt-16">
      <p className="text-gray-600 mb-4">
        <span role="img" aria-label="heart"></span> by <a className="text-gray-500 hover:underline" href="https://github.com/balfajr">Balfajr</a>
      </p>
    </div>
  )
}

export default Footer