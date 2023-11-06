const metadata = {
    title: 'Next.JS Boilerplate'
}

const RootLayout = ({children}) => {
    return (
        <html lang="en">
        <body>
            {children}
        </body>
        </html>
    )
}

export {
    RootLayout as default,
    metadata
}