const grandParent=(g1,g2)=>{
    const g3=3;
    return parent=(p1,p2)=>{
        const p3=33;
        return child=(c1,c2)=>{
            const c3=333;
            return g1+g2+g3+p1+p2+p3+c1+c2+c3;
        }
    }
}

const parentFunction=grandParent(1,2); // parentFunction은 g1,g2,g3에도 접근 가능
const childFunction=parentFunction(11,22); // childFunction은 g1,g2,g3,p1,p2,p3에도 접근 가능
console.log(childFunction(111,222)); // 738
console.log(parentFunction)