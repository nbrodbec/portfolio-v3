const Container = ({ children, full }) => {
    return (
        <div className={'w-full flex-1 flex flex-col ' + (!full && 'px-4 py-12 max-w-screen-xl')}>
            {children}
        </div>
    );
}

export default Container;