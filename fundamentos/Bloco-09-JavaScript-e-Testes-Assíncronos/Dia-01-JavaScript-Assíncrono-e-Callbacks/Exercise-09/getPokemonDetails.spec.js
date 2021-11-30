// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails } = require('../Exercise-08/script');

describe("A função getPokemonDetails", () => {

  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
    function showResult(error, message) {
      try {
        expect(error).toEqual(Error('Não temos esse pokémon para você :('));
        done();
      } catch (error) {
        done(error);
      }
    }
    getPokemonDetails((pokemon) => pokemon.name === 'Squirtles', showResult);
  });

  it("retorna um pokemon que existe no banco de dados", (done) => {
    
    function showResult(error, message) {
      try {
        expect(message).toEqual('Olá, seu pokémon é o Squirtle, o tipo dele é Water e a habilidade principal dele é Water Gun');
        done();
      } catch (error) {
        done(error);
      }
    }

    getPokemonDetails((pokemon) => pokemon.name === 'Squirtle', showResult);
  });
});