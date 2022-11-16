function Flames(){
    let uname = document.getElementById("uname").value
    let cname = document.getElementById("cname").value
    let output = document.getElementById("output")

    if(!uname || !cname)
    {
        return
    }
    console.log("click happend")
    let c=0;
	 let a=uname.toUpperCase()
	 let b=cname.toUpperCase()
	 let h=[];
     for(let j=0;j<26;j++){
        h.push(0)
     }
     console.log(h,"--checking -----1")
	 for(let i=0;i<a.length;i++){
	    h[a.charCodeAt(i)-65]++;
	 }
     console.log(h,"---checking -----2")
	 for(let i=0;i<b.length;i++){
	     h[b.charCodeAt(i)-65]--;
	 }
     console.log(h,"----checking -----3")
	 for(let i=0;i<26;i++){
	     c=c+Math.abs(h[i]);
	 }
	 let f="FLAMES";
     console.log("checking -----4")
	 while(f.length !=1){
        console.log("c:",c)
	     let d=c%f.length;
         console.log(f.length,"----",d)

	     if(d !=0){
	         f=f.substring(d)+f.substring(0,d-1);
	     }else{
	         f=f.substring(0,f.length-1);
	     }
	 }
     console.log("checking -----5")
	   switch(f){
	       case "F":
	           output.innerHTML = "Friend";
	           break;
	       case "L":
                output.innerHTML = "Love";
	           break;
	       case "A":
	           output.innerHTML = "Affection"
	           break;
	       case "M":
	           output.innerHTML = "Marriage"
	           break;
	       case "E":
	           output.innerHTML = "Enemy"
	           break;
	       case "S":
	           output.innerHTML = "Sister"
	           break;
	   }
       console.log("end")
	}



// import java.util.*;
// import java.lang.*;
// public class Main
// {
// 	public static void main(String[] args) {
// 	 Scanner in = new Scanner(System.in);
// 	 System.out.println("Enter your Name :");
// 	 String s1=in.next().toUpperCase();
// 	 System.out.println("Enter your crush name :");
// 	 String s2=in.next().toUpperCase();
// 	 int c=0;
// 	 char a[]=s1.toCharArray();
// 	 char b[]=s2.toCharArray();
// 	 int h[]=new int[26];
// 	 for(int i=0;i<a.length;i++){
// 	     h[a[i]-'A']++;
// 	 }
// 	 for(int i=0;i<b.length;i++){
// 	     h[b[i]-'A']--;
// 	 }
// 	 for(int i=0;i<26;i++){
// 	     c=c+Math.abs(h[i]);
// 	 }
// 	 String f="FLAMES";
// 	 while(f.length() !=1){
// 	     int d=c%f.length();
// 	     if(d !=0){
// 	         f=f.substring(d)+f.substring(0,d-1);
// 	     }else{
// 	         f=f.substring(0,f.length()-1);
// 	     }
// 	 }
// 	   switch(f){
// 	       case "F":
// 	           System.out.println("Friend");
// 	           break;
// 	       case "L":
// 	           System.out.println("Love");
// 	           break;
// 	       case "A":
// 	           System.out.println("Affection");
// 	           break;
// 	       case "M":
// 	           System.out.println("Marriage");
// 	           break;
// 	       case "E":
// 	           System.out.println("Enemy");
// 	           break;
// 	       case "S":
// 	           System.out.println("Sister");
// 	           break;
// 	   }
// 	}
    
// }