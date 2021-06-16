
var type;

function battle(event){
    type = event.target.value;
    document.getElementById("result").innerText 
    = type + "를 내보냈다! 잘 다녀와 " + type + "!";
    document.getElementById("question").innerText
    = "어떤 기술을 사용할까?";
    document.getElementById("attacking").style = "display:block";

}

function final_battle(event){
    var attack = event.target.value;
    var result = document.getElementById("result2");
    if(type=="꼬부기"){
        if(attack=="몸통박치기")
            result.innerText="꼬부기의 몸통박치기!\n상대 파이리의 몸통박치기!\n꼬부기는 쓰러졌다!\n라이벌과의 싸움에서 패배했다...\n(상대방보다 레벨이 낮은데 효과가 동일한 기술을 써서 패배한 것 같다. 효과가 좋은 기술을 써보자!)";
        else if(attack=="속성공격")
            result.innerText="꼬부기의 물대포!\n효과가 굉장했다!\n상대 파이리는 쓰러졌다!\n라이벌과의 싸움에서 승리했다!";
    }
    else if(type=="파이리"){
        if(attack=="몸통박치기")
            result.innerText="파이리의 몸통박치기!\n상대 파이리의 몸통박치기!\n파이리는 쓰러졌다!\n라이벌과의 싸움에서 패배했다...\n(상대방보다 레벨이 낮은데 효과가 동일한 기술을 써서 패배한 것 같다. 효과가 좋은 기술을 써보자!)";
        else if(attack="속성공격")
            result.innerText="파이리의 불꽃세례!\n효과가 별로인 듯 하다...\n상대 파이리의 몸통박치기!\n파이리는 쓰러졌다!\n라이벌과의 싸움에서 패배했다...\n(효과가 별로인 기술을 써서 패배한 것 같다. 효과가 좋은 기술을 써보자!)";
    }
    else if(type=="이상해씨"){
        if(attack=="몸통박치기")
            result.innerText="이상해씨의 몸통박치기!\n상대 파이리의 불꽃세례!\n효과가 굉장했다!\n이상해씨는 쓰러졌다!\n라이벌과의 싸움에서 패배했다...\n(상대방보다 레벨이 낮은데 효과가 동일한 기술을 쓴데다 상성적으로 불리해서 패배한 것 같다. 다른 포켓몬으로 효과가 좋은 기술을 써보자!))";
        else if(attack=="속성공격")
            result.innerText="이상해씨의 덩쿨채찍!\n효과가 별로인 듯 하다...\n상대 파이리의 불꽃세례!\n효과가 굉장했다!\n이상해씨는 쓰러졌다!\n라이벌과의 싸움에서 패배했다...\n(효과가 별로인 기술을 쓴데다 상성적으로 불리해서 패배한 것 같다. 다른 포켓몬으로 효과가 좋은 기술을 써보자!))"
    }
    
    
}
