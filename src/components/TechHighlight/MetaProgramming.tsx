interface PropType{
codeString: string,
}

export const CodeSnippet = ({codeString}: PropType) => {
    return <pre style={{
        backgroundColor: '#282c34',
        color: '#abb2bf',
        padding: '1rem',
        borderRadius: '5px',
        overflowX: 'auto',
        fontSize: '14px',
        lineHeight: '1.5'
    }}>
        <code>{codeString}</code>
    </pre>
}

export const MetaProgramming = () => {
    const classDefstring = `
    template <typename TBase>
    class GenericFactory {
    public:
        using Creator = std::function<std::shared_ptr<TBase>()>;

        static void Register(const std::string& id, Creator func) {
            GetTable()[id] = func;
        }

        static std::shared_ptr<TBase> Create(const std::string& id) {
            auto it = GetTable().find(id);
            return it != GetTable().end() ? it->second() : nullptr;
        }
    };
    `
    return (
        <div>
            <h2>Type Registration System using Template Metaprogramming</h2>
            <div>
                The engine implements a generic templated factory system that allows runtime creation of derived engine objects (characters, controllers, state machines, etc.) using string identifiers.
                <a href="https://github.com/Subham0207/game-engine/blob/main/Glitter/Headers/GenericFactory.hpp#L21"> See full implmentation here</a>
            </div>
            <div>
                <CodeSnippet codeString={classDefstring}/>
            </div>
            <div>You can find more on how I use Macros to inject registration code in child class.<a href="https://github.com/Subham0207/game-engine/blob/main/Glitter/Headers/GenericFactory.hpp#L57"> here</a> but all you need to do is add below code snippet to child class.</div>
             <CodeSnippet codeString={`REGISTER_TYPE(PlayerCharacter, "Player", CharacterFactory);`}></CodeSnippet>
        </div>
    )
}