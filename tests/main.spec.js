describe('Main', function() {  //separa grandes blocos
  describe('Method a', function() {
    context.skip('Case 1', function() {
      it('should happen bla', function() {
        //espera que aconteça algo

        //entra dados

        //espera retornar
        throw new Error("error");
      })
    });

    context.skip('Case 2', function() {
      it('should happen blabla', function() {
        //espera que aconteça algo

        //entra dados

        //espera retornar
        throw new Error("error");
      })
    })
  });

  describe('Method b', function() {
    context('Case1', function() {
      it('should happen mimimi', function() {
        //espera que aconteça algo

        //entra dados

        //espera retornar
      })
    })
  });
})
