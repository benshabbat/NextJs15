import { ReactNode } from 'react'

const layout = ({children}:{children:ReactNode}) => {
  return (
    <div>
        <h1>Root Layout</h1>
        <p>This is the root layout. You can add navigation, sidebars, or other components here.</p>
        <div>{children}</div>
        <footer>
            <p>Root Footer</p>
        </footer>
    </div>
  )
}

export default layout