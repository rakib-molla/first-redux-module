// curring function : যে ফাংশন দ্বারা পূর্বের ফংশন এর রেফারেঞ্জ রেখে দেই (পাই ) তাই হচ্ছে Curring function : Example:

const add =(a)=>{
    return (b)=>{
        return (c)=>{
            return a*b+c;
        }
    }
}

const level = add(5);

console.log(level(10)(10))

console.log(level(20)(20))