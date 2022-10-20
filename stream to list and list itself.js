
//filter using stream method
function filter_with_stream(start, end) {
    return stream_filter(x => x%5 === 0, enum_stream(start, end));
}

eval_stream(filter_with_stream(2, 20000), 5);

//filter using list method
function filter_with_list(start, end) {
    return filter(x => x%5 === 0, enum_list(start, end));
}

function take(n, list) {
    return n === 0
          ? null
          : pair(head(list), take(n-1, tail(list)));
}

take(5, filter_with_list(5, 200000));