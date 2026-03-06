class Node{
    constructor(position,before){
        this.position=position;
        this.before=before;
    }
}
function generateAll(node){
    let x=node.position[0];
    let y=node.position[1];
    let arr=[];
    arr.push(new Node([x-1,y+2],node));
    arr.push(new Node([x+1,y+2],node));
    arr.push(new Node([x+2,y+1],node));
    arr.push(new Node([x+2,y-1],node));
    arr.push(new Node([x+1,y-2],node));
    arr.push(new Node([x-1,y-2],node));
    arr.push(new Node([x-2,y-1],node));
    arr.push(new Node([x-2,y+1],node));
    let newArr=arr.filter((element)=>{
        return element.position[0]>=0 && element.position[0]<=7 && element.position[1]>=0 && element.position[1]<=7;
    });
    return newArr;
}
function unvisited(visited,node){
    for(let i=0;i<=visited.length-1;i++){
        if(visited[i].position[0]===node.position[0] && visited[i].position[1]===node.position[1]){
            return false;
        }
    }
    return true;
}
function knightMoves(start,end){   
    let startNode=new Node(start,null);
    let queue=[startNode];
    let visited=[startNode];
    let path=[];
    let removedNode;
    while(queue.length){
        removedNode=queue.shift();
        // visited.push(removedNode);
        if(removedNode.position[0]===end[0]&&removedNode.position[1]===end[1]){
            break;  //found.to continue
        }
        let generated=generateAll(removedNode).filter((element)=>{return unvisited(visited,element)});
        generated.forEach((element)=>{queue.push(element);visited.push(element);});
    }
    let cur=removedNode;
    while(cur!==null){
        path.unshift(cur.position);
        cur=cur.before;
    }
    return path;
}
console.log(knightMoves([3,3],[0,0]));
console.log(knightMoves([0,0],[3,3]));
console.log(knightMoves([0,0],[7,7]));