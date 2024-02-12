



    //  function callBack(fn){
    //     console.log('hello');
    //     fn(5,5)
    //     // console.log(fn);

    //  }

    


    // //  callBack( function add(a,b){
    // //     console.log(a+b);
    // //  })

                
    //    function step1(fn){
    //     setTimeout(()=>{
    //         console.log(fn);
    //         console.log('select ho gyi photo');
    //         fn('selectImage')

    //     },4000)

    //    }
    //    function step2(a,fn){
    //     setTimeout(()=>{
    //         console.log(`filteredImage kaun sii ${a}`);
    //         fn('filteredImage')

    //     },3000)

    //    }
    //    function step3(filteredImage,fn){
    //     setTimeout(()=>{
    //         console.log(`captions image ${filteredImage}`);
    //         fn('captionsAddedImage')

    //     },2000)

    //    }
    //    function step4(captionsAddedImage){
    //     setTimeout(()=>{
    //         console.log(`${captionsAddedImage}  post ho gyiiiii`);

    //     },1000)

    //    }



    //    step1()
    //    step2()
    //    step3()
    //    step4()
    // callBack


    // callBack hell  =>  Promise
    // step1( (data)=>{
    //     step2(data,(filteredImage)=>{
    //         step3(filteredImage,(captionsAddedImage)=>{
    //             step4(captionsAddedImage)
    //         })
    //     })
    // }  )


            //   let promise =  new Promise((resolve,reject)=>{

            //     // resolve('helloooo')
            //     reject('rejectttttt')

            //      })


                //  promise.then((data)=>{
                //     console.log(data);

                //  }).catch((err)=>{
                //     console.log(err);

                //  })


                //  console.log(promise);



                function step1(){
                    return new Promise((resolve,reject)=>{
                        setTimeout(()=>{
                            console.log('select');
                            resolve('select ho gyiii imageee')

                        },4000)
                       

                    })
                }
                function step2(){
                    return new Promise((resolve,reject)=>{
                        setTimeout(()=>{
                            console.log('filter');
                            resolve('select ho gyiii imageee')

                        },4000)

                    },4000)
                }
                function step3(){
                    return new Promise((resolve,reject)=>{
                        setTimeout(()=>{
                            console.log('captionsss');
                            resolve('select ho gyiii imageee')

                        },4000)

                    })
                }
                function step4(){
                    return new Promise((resolve,reject)=>{
                        setTimeout(()=>{
                            console.log('posttt');
                            resolve('select ho gyiii imageee')

                        },4000)

                    })
                }





                   async function callBack(){
                      await  step1()
                      await  step2()
                      await  step3()
                      await  step4()

                   }

                   callBack()
                // console.log(call());












                //  Promise
                // step1().
                // then((data)=>{
                //     console.log(data);
                //     return step2()
                // }).
                // then((filteredImage)=>{
                //     console.log(filteredImage);
                //     return step3()
                // }).
                // then((captionsAddedImage)=>{
                //     console.log(captionsAddedImage);
                //     return step4()
                // }).
                // then((data)=>{
                //     console.log(data)
                // })










     