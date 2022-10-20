// differnces of using stream and list

function skip_by_3(start, end) {
    return start > end
           ? null
           : (start % 3 !== 0)
           ? skip_by_3(start+1, end)
           : pair(start, skip_by_3(start + 3, end));
}

skip_by_3(4, 28);

function skip_by_3_stream(start, end) {
    return start > end
           ? null
           : (start % 3 !== 0)
           ? skip_by_3_stream(start+1, end)
           : pair(start, () => skip_by_3_stream(start + 3, end));
}

skip_by_3_stream(8, 100);
eval_stream(skip_by_3_stream(8, 100), 3);

function skip_by_3_by_num(initial, n) {
    return n === 0
          ? null
          : pair(initial, skip_by_3_by_num(initial + 3, n - 1));
}

skip_by_3_by_num(2, 30);

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
