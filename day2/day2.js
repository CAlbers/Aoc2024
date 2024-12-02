import { data } from './day2data.js';

let testing = 0;
//Split out all the spaces and enters. Can be made more simple ofc
let dataArray = data.split(" ").join(',').split("\n")
for (let i = 0; i < dataArray.length; i++) {
    dataArray[i] = dataArray[i].split(",").map(Number);
};

function part1() {
    let safe = 0;
    for (let i = 0; i < dataArray.length; i++) {
        //if(checkSafetyLevel(dataArray[i]))
            safe+=checkSafetyLevel(dataArray[i]);
    }
    return safe
}

function part2(){
    let safe = 0;
    for (let i = 0; i < dataArray.length; i++) 
    { 
            //for every entry we first want to check stock
            if(checkSafetyLevel(dataArray[i]) == 1)
            {
                safe++;
                continue
            }
            else
            {
                if(dataArray[i].some((value, index) => {
                    console.log(dataArray[i])     
                    let splicedArray = dataArray[i];
                    splicedArray.splice(index,1);
                    return checkSafetyLevel(splicedArray) == 1;
                }))
                safe++
                continue;
            }
    }
    return safe;
}

function checkSafetyLevel(level)
{
    let upper = false;
    //Per level
    //upgrade to map
    for (let j = 0; j < level.length; j++) {
        if (j == 0)
            //If second in row is bigger then starting number
            if (level[1] > level[0])
                upper = true;
        //check against index 0 and previous if still acending or descending
        if (j != 0) {
            let diff = Math.abs(level[j - 1] - level[j]);
            if (diff >= 1 && diff <= 3) {
                //Check if current is lower then 0 and index-1 or higher then 0 and index-1
                if ((!upper && level[0] > level[j] && level[j - 1] > level[j]) || (upper && level[0] < level[j] && level[j - 1] < level[j])) {
                    if (j == level.length - 1) {
                        //Finished the row so safe
                        //console.log(level);
                        return 1;
                    }
                }
                else
                    break;
            }
            else
                //Diff to big, unsafe
                break;
        }
    }

    return 0;
}

//console.log(part1());
console.log(part2());