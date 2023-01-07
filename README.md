# Food Plan

## Collect data

```
function collect(id) {
    var data = jQuery(`.${id} .target-text`).map((i, k) => jQuery(k).text().split(' ')[0]);

    var result = { "calories": data[0], "protein": data[1], "carbohydrate": data[2], "fat": data[3] };

    JSON.stringify(result);

    copy(result);
}
```
