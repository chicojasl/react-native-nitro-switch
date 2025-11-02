#include <jni.h>
#include "NitroSwitchOnLoad.hpp"

JNIEXPORT jint JNICALL JNI_OnLoad(JavaVM* vm, void*) {
  return margelo::nitro::nitroswitch::initialize(vm);
}
