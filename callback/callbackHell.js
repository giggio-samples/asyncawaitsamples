let funcA, funcB, funcC, funcD, funcE, funcF, funcG, funcH, funcI;

funcA(a => {
    funcB(a, b => {
        funcC(b, c => {
            funcD(c, d => {
                funcE(d, e => {
                    funcF(e, f => {
                        funcG(f, g => {
                            funcH(g, h => {
                                funcI(h, i => {
                                    alert(i);
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})