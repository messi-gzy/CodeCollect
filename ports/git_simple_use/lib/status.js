const simpleGit = require('simple-git');
let git = simpleGit("E:/Data_Tool/Typora")

const init = async () => {
    const status = await git.status();
    console.log(status);
}

const add = async () => {
    const add = await git.add('./*')
    console.log(add);
}

const commit = async () => {
    const commit = await git.commit('notion')
    console.log(commit);
}

const push = async () => {
    //status
    const status = await git.status();
    console.log(status);
    //add
    const add = await git.add('./*')
    console.log(add);
    //commit
    const commit = await git.commit('notion')
    console.log(commit);
    //branch
    const branch = await git.branchLocal()
    const get_remote = await git.getRemotes()
    //push
    for (let i = 0; i < get_remote.length; ++i) {
        const push = await git.push(get_remote[i]["name"], 'master')
        console.log(push);
    }
}


const getBranchLocal = async () => {
    const branch = await git.branchLocal()
    for (let i = 0; i < branch["all"].length; ++i) {
        console.log(branch["all"][i]);
    }
}

const getRemote = async () => {
    const branch = await git.branchLocal()
    const get_remote = await git.getRemotes()
    for (let i = 0; i < branch["all"].length; ++i) {
        console.log(branch["all"][i]);
    }

    for (let i = 0; i < get_remote.length; ++i) {
        console.log(get_remote[i]["name"]);
    }
}

push()
