let address="";

const country=(addr)=>{
    addr+="대한민국 ";
    const province=(addr)=>{
        addr+="경기도 ";
        const city=(addr)=>{
            addr+="용인시 ";
            console.log("original : "+addr);
        };
        return city(addr);
    };
    return province(addr);
};

const promise_address=(addr)=>{
    return new Promise((resolve,reject)=>{
        resolve(addr+='대한민국 ');
    }).then(addr=>{
        return addr+='경기도 ';
    }).then(addr=>{
        return addr+="용인시";
    }).then(addr=>{
        console.log("Promise:",addr);
    });
}

const async_country=(addr)=>{
    return new Promise((resolve,reject)=>{
        resolve(addr+="대한민국 ");
    });
};

const async_province=(addr)=>{
    return new Promise((resolve,reject)=>{
        resolve(addr+="경기도 ");
    });
};

const async_city=(addr)=>{
    return new Promise((resolve,reject)=>{
        resolve(addr+="용인시 ");
    });
};

const async_address=async (addr)=>{
    try{
        let country=await async_country(addr);
        let province=await async_province(country);
        let city=await async_city(province);
        console.log("async/await: ",city);
    }
    catch (err){
        console.error(err);
    }
};

country(address);
async_country(address).then(async_province).then(async_city).then((result)=>console.log("Promise2: ",result))
promise_address(address);
async_address(address);
