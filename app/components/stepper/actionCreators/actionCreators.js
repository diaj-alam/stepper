export function preparation(steps) {
    return {
        type: 'PREPARATOIN'
        ,steps: steps //forvard or back
    }
}

export function canWalk(whereFrom) {
    return {
        type: 'CANWALK'
        ,whereFrom: whereFrom
    }
}

export function walk(where) {
    return {
        type: 'WALK'
        ,where: where
    }
}

export function cancel() {
    return {
        type: 'CANCEL'
    }
}

export function result(which, resultObj) {
    return {
        type: 'RESULT'
        ,which
        ,resultObj
    }
}