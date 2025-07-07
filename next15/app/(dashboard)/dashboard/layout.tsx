import {ReactNode} from "react"

const layout = ({children}:{children:ReactNode}) => {
  return (
    <div>
        <h1>Dashboard Layout</h1>
        <p>This is the dashboard layout. You can add navigation, sidebars, or other components here.</p>
        <div>{children}</div>
        <footer>
            <p>Dashboard Footer</p>
        </footer>
    </div>
  )
}

export default layout