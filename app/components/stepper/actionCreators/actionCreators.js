export function preparation(steps) {
    return {
        type: 'PREPARATOIN'
        ,steps: steps //forvard or back
    }
}

export function canWalk(whereFrom) {
    return {
        type: 'CANWALK'
        ,where: whereFrom //from which component. there is must be an identifier for each components on each step
    }
}

export function walk(where) {
    return {
        type: 'WALK'
        ,where: where //forvard or back
    }
}

export function cancel() {
    return {
        type: 'CANCEL'
    }
}