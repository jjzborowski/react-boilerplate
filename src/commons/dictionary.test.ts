import translate from 'commons/dictionary';

test('it should return correct text', () => {
    const expectedValue = 'Welcome to React Boilerplate';

    expect(translate('header')).toEqual(expectedValue);
});

test('it should return correct text with replaced template with variable', () => {
    const expectedValue = 'Welcome User!';

    expect(translate('greetings', { NAME: 'User' })).toEqual(expectedValue);
});
