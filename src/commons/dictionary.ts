interface DictionaryInterface {
    [index: string]: string,
}

const dictionary: DictionaryInterface = {
    'header': 'Welcome to React Boilerplate',
    'greetings': 'Welcome {NAME}!',
};

const translate = (key: string, params: DictionaryInterface = {}): string => {
    let text: string = dictionary[key];

    Object.entries(params).forEach(([param, value]) => {
        text = text.replace(new RegExp(`{${param}}`, 'g'), value);
    });

    return text || `@@${key}@@`;
};

export default translate;
