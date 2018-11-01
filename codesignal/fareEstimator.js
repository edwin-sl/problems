function fareEstimator(ride_time, ride_distance, cost_per_minute, cost_per_mile) {
    let res = []
    cost_per_minute.forEach((cost, index) =>
        res.push(ride_time * cost + ride_distance * cost_per_mile[index])
    )
    return res
}

const res = fareEstimator(
    30,
    7,
    [0.2, 0.35, 0.4, 0.45],
    [1.1, 1.8, 2.3, 3.5]
)
console.log(res)
