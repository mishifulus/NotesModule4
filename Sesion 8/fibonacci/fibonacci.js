function fibonacci (n)
{
    if ( n < 0 )
    {
        return NaN;
    }

    if (n == 1 || n == 2)
    {
        return 1;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
}

exports.fibonacci = fibonacci;