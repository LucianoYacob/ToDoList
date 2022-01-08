const Container = (...elements) => {
    const $container = document.createElement("div");

    $container.classList.add("container");

    $container.append(...elements);

    return $container;
}

export default Container;