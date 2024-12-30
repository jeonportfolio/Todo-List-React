import styled from "@emotion/styled";

const layoutClassName = `
    border-[1px] border-solid border-gray-100
    p-[32px] rounded-[6px] w-[50%] m-auto
`


function Layout({children}) {
    return <div className={layoutClassName}>{children}</div>
}


const Container = styled.div`
    border: 1px solid gray;
    padding: 32px;
    border-radius: 6px;
    width: 50%;
    margin: auto;
`

export default Layout;