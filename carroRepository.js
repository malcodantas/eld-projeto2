class CarroRepository{
    initStoreIfNotExists(){
        localStorage.carros === undefined ? localStorage.setItem('carros','[]') :console.log("store ja existe")
    }
    create(carroObj){
        let carros= JSON.parse(localStorage.carros)
        let pk_carro=localStorage.pk_carro
        if(pk_carro){
            localStorage.pk_carro = Number(pk_carro)+1
        }else{
            localStorage.pk_carro = 1
        }
        let novoCarro = {...carroObj,id:localStorage.pk_carro}
        carros.push(novoCarro)
        console.log(carros)
        localStorage.setItem('carros',JSON.stringify(carros))
    }
    list(){
        return JSON.parse(localStorage.carros)
    }
    getCarro(id){
        let carros= JSON.parse(localStorage.carros)
        var carro = carros.filter(element =>{
            if(element.id == id){
                return element
            }
        })
        return carro[0]
    }
    update(id,carroObj){
        console.log(carroObj)
        let carro = this.getCarro(id)
        let carros= JSON.parse(localStorage.carros)
        carros.forEach((element,index) => {
            if (element.id==id){
                carros[index]= carroObj
            }
        });
        console.log(carros)
        localStorage.carros= JSON.stringify(carros)
    }
    delete(id){
        let carro = this.getCarro(id)
        console.log(carro)
        let carros= JSON.parse(localStorage.carros)
        carros=carros.filter(element=>{
            return element.id != id
        })

        localStorage.carros= JSON.stringify(carros)
    }

}