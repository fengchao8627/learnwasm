#define WASM_EXPORT __attribute__((visibility("default")))

WASM_EXPORT
int main() {
  return 42;
}

WASM_EXPORT
int add (int x, int y) {
  return x + y;
}

WASM_EXPORT
int square (int x) {
  return x * x;
}