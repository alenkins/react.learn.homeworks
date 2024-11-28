export const Title = ({children, className = '', tagName = 'h1'}) => {
    const Title = tagName;

    return <Title className = {className}>{children}</Title>;
}